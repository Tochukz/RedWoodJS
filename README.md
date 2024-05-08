# RedWoodJS
[Redwood Quick Start](https://redwoodjs.com/docs/quick-start)   
[RedwoodJS Tutorial](https://redwoodjs.com/docs/tutorial/foreword)    
[GitHub](https://github.com/redwoodjs/redwood)  

### Introduction
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
We can generate a set components required for a CRUD operation on a model using the  `scaffold` command.
```bash
$ yarn redwood generate scaffold post
```  
This will create all the pages, components, and services necessary to perform all CRUD actions on our _Post_ model.  
The files generated are described in the table below.  

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
Run Tests            | `yarn redwood test`
Generate a page      | `yarn redwood generate page my-page`
Run prisma migration | `yarn redwood prisma migrate dev`
Generate a layout    | `yarn redwood generate layout blog`
Generate a page      | `yarn redwood generate page home /`
Generate scaffolding | `yarn redwood generate scaffold post`
Generate a cell      | `yarn rw generate cell name`
Access Deploy Options| `yarn rw setup deploy --help`
Access Auth Options  | `yarn rw setup auth --help`
Access Style Options | `yarn rw setup ui --help`  
To upgrade your app  | `yarn redwood upgrade`
Add package the web workspace | `yarn workspace web add marked`
Add package the api workspace | `yarn workspace api add better-fs`
__Story Book__  

__Cell__  
Cells are a declarative approach to data fetching and one of Redwood's signature modes of abstraction.  
While it might seem like there's a lot of magic involved, all a Cell really does is execute a GraphQL query and manage its lifecycle.  
To generate a cell, use the `generate cell` command
```bash
$ yarn rw generate cell name
```
This creates a directory named _[name]Cell_ in _web/src/components_ with four files:
1. `<name>Cell.js`
2. `<name>Cell.test.js`
3. `<name>Cell.stories.js`
4. `<name>Cell.mock.js`.  

If you want a Cell that renders a list instead of a Single model, you can use the plural name for the model
```bash
$ yarn rw generate cell names
```
Or use the `--list` flag for words which plural is same as singular
```bash
$ yarn rw generate cell fish
```
[Learn More](https://redwoodjs.com/docs/cells)

### Chapter 1: Getting Started
Creating your first page
```bash
$ yarn redwood generate page home /
```

Creating your second page
```bash
$ yarn redwood generate page about
```
Creating a layout
```bash
$ yarn redwood g layout blog
```

### Chapter 2: Getting Dynamic
