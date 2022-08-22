import { Body, Controller, UploadedFile, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postsServise: PostsService) {}

    @Post()
    createPost(@Body() dto: CreatePostDto, 
                @UploadedFile() image) {
        this.postsServise.create(dto, image)
    }

}
