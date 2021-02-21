import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query("year") searchingYear: string) {
        return `We are Searching for a movie made after: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') id: string): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moviesService.deleteOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateData) {
        return {
            updatedMovie: id,
            ...updateData,
        };
    }
}
