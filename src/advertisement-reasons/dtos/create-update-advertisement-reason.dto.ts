import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUpdateAdvertisementReasonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
}