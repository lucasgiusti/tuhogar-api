import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { AddressDto } from "../../addresses/dtos/address.dto";
import { SocialMediaDto } from "./create-social-media.dto";
import { UserDocumentType } from "../interfaces/user.interface";

export class PatchUserDto {

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'invalid.name.should.not.be.empty' })
    @MaxLength(150, { message: 'invalid.name.must.be.shorter.than.or.equal.to.150.characters' })
    name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmpty({ message: 'invalid.address.should.not.be.empty' })
    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'invalid.phone.should.not.be.empty' })
    @MaxLength(30, { message: 'invalid.phone.must.be.shorter.than.or.equal.to.30.characters' })
    phone: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'invalid.whatsApp.must.be.a.string' })
    @IsNotEmpty({ message: 'invalid.whatsApp.should.not.be.empty' })
    @MaxLength(30, { message: 'invalid.whatsApp.must.be.shorter.than.or.equal.to.30.characters' })
    whatsApp: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'invalid.webSite.must.be.a.string' })
    @IsNotEmpty({ message: 'invalid.webSite.should.not.be.empty' })
    @MaxLength(150, { message: 'invalid.webSite.must.be.shorter.than.or.equal.to.150.characters' })
    webSite: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmpty({ message: 'invalid.socialMedia.should.not.be.empty' })
    @ValidateNested()
    @Type(() => SocialMediaDto)
    socialMedia: SocialMediaDto;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'invalid.description.must.be.a.string' })
    @IsNotEmpty({ message: 'invalid.description.should.not.be.empty' })
    @MaxLength(300, { message: 'invalid.description.must.be.shorter.than.or.equal.to.300.characters' })
    description: string;
}