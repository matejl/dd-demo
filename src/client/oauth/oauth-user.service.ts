import * as axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { GetAccessTokenDto } from './dto/get-access-token.dto';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { Logger } from '@nestjs/common';
import { OauthUserModule } from './oauth-user.module';

export class OauthUserService {
  private client: axios.AxiosInstance;

  private readonly logger = new Logger(OauthUserService.name);

  constructor(private readonly httpService: HttpService) {}

  private async getAccessToken(): Promise<string> {
    const obj = await firstValueFrom(
      this.httpService
        .post<GetAccessTokenDto>(
          'https://dev-shdsu3ytk7a0ku1n.eu.auth0.com/oauth/token',
          {
            client_id: 'l2iBXYIFx80HrZmH4OL0R8YqkxUlIdig',
            client_secret:
              'pcbeOWqr5YhwYeQloJ1apK7r49MOp7Kr4GSDBnSEywv7PmJataP7Wd8bzLZe-by5',
            audience: 'https://dev-shdsu3ytk7a0ku1n.eu.auth0.com/api/v2/',
            grant_type: 'client_credentials',
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return obj.data.access_token;
  }
}
