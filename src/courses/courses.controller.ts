import { Controller, Get, Param, Post, Body, Delete, HttpCode, Put } from '@nestjs/common'
import { CoursesService } from './courses.service'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    @Get()
    findAll() {
        return this.courseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.courseService.findOne(+id)
    }

    
    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.update(+id, updateCourseDto)
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.courseService.remove(+id)
    }
}
