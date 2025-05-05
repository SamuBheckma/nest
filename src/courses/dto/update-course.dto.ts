import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    readonly name?: string;
    readonly description?: string
    readonly tags?: string[]
}