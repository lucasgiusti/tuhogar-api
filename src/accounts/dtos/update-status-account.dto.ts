import { IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { AccountStatus } from "../interfaces/account.interface";
import { Property } from "src/decorators/property.decorator";

export class UpdateStatusAccountDto {
    @ApiProperty()
    @IsEnum(AccountStatus, { message: 'invalid.status.must.be.one.of.the.following.values.ACTIVE.INACTIVE' })
    @Property()
    status: AccountStatus;
}