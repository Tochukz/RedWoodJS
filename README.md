# RedWoodJS
[Redwood Quick Start](https://redwoodjs.com/docs/quick-start)   
[RedwoodJS Tutorial](https://redwoodjs.com/docs/tutorial/foreword)    
[GitHub](https://github.com/redwoodjs/redwood)  

### Chapter 1: Introduction
__Create new application__  
To create a new RedWood application
```bash
$ yarn create redwood-app
```
Follow the prompt.

Alternatively, you can do
```bash
$ yarn create redwood-app my-redwood-app --typescript
$ cd my-redwood-app
$ yarn install
$ yarn redwood dev
```  

__Generate a Scaffolding__  
We can generate a set components required for a CRUDE operation on a model using the  _scaffold_ command.
```bash
$ yarn redwood generate scaffold post
```  
This will create all the pages, components, and services necessary to perform all CRUD actions on our _post_ model.
The files generate are described in the table below.  

File Description      | File Path
----------------------|------------
GraphQL SDL           | `api/src/graphql/posts.sdl.ts`
Scenarios             | `api/src/services/posts/posts.scenarios.ts`
Test Suite            | `api/src/services/posts/posts.test.ts`
Resolvers             | `api/src/services/posts/posts.ts`
CSS                   | `web/src/scaffold.css`
Update Component      | `web/src/components/Post/EditPostCell/EditPostCell.tsx`
Create Component      | `web/src/components/Post/NewPost/NewPost.tsx`
Single Model Component| `web/src/components/Post/Post/Post.tsx`
Model Collection Component | `web/src/components/Post/Posts/Posts.tsx`
Cell Component        | `web/src/components/Post/PostCell/PostCell.tsx`
Cell Component        | `/web/src/components/Post/PostsCell/PostsCell.tsx`
Form Component        | `web/src/components/Post/PostForm/PostForm.tsx`
Scaffolding Layout    | `web/src/layouts/ScaffoldLayout/ScaffoldLayout.tsx`
Formatter test        | `web/src/lib/formatters.test.tsx`
Formatter Component   | `web/src/lib/formatters.tsx`
Update Page           | `src/pages/Post/EditPostPage/EditPostPage.tsx`
Create Page           | `web/src/pages/Post/NewPostPage/NewPostPage.tsx`
Current Model Page    | `web/src/pages/Post/PostPage/PostPage.tsx`
Model Collection Page | `web/src/pages/Post/PostsPage/PostsPage.tsx`


The following files are updated in the process
1. `web/src/App.tsx`
2. `web/src/Routes.tsx`

Note that the package `humanize-string` is also installed in the scaffolding operation.    

__Basic Redwood CLI Operations__

Operation            | Command
---------------------|--------
Start Dev Server     | `yarn redwood dev`
Generate a page      | `yarn redwood generate page my-page`
Run prisma migration | `yarn redwood prisma migrate dev`
Generate scaffolding | `yarn redwood generate scaffold post`
