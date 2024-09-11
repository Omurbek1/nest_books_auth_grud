import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'publicationDate must be a valid ISO 8601 date string' },
  )
  publicationDate: string;
}
