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
Generate a cell      | `yarn redwood generate cell name`
Generate types       | `yarn redwood generate types`
Access Deploy Options| `yarn redwood generate setup deploy --help`
Access Auth Options  | `yarn redwood generate setup auth --help`
Access Style Options | `yarn redwood generate setup ui --help`  
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
__Setting up database schema__  
1. Create a database using your database  
```bash
create database red_blog;
```
2. Update _DATABASE_URL_ variable in your _.env_ file
```
DATABASE_URL="mysql://username:password@localhost:3306/red_blog"
```
3. Add a Table definition to _schema.prisma_ file
```sql
model Post {
    id        Int      @id @default(autoincrement())
    title     String
    body      String
    createdAt DateTime @default(now())
}
```
4. Run the migration
```bash
$ yarn rw prisma migrate dev
```
You will be prompted for the name of the migration, and you can write "_create post_" without the quotes.  

5. Fireup Prisma Studio  
Using npx directly:
```bash
$ npx prisma studio --schema api/db/schema.prisma
```
Alternatively, you can use _redwood_  
```
$ yarn rw prisma studio
```

__Create Scaffolding__  
To create all the pages, components and services necessary to perform all CRUD actions on our posts table:
```bash
$ yarn rw g scaffold post
```

__Create a cell__  
```bash
$ yarn rw g cell Articles
```

__Generate types__  
If the dev server was not running at the time a cell was generated, you may need to generate the types separately.
```bash
$ yarn rw g types
```
