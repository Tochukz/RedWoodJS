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

Operation                | Command
-------------------------|--------
Start Dev Server         | `yarn redwood dev`
Run Tests                | `yarn redwood test`
Generate and run prisma migration | `yarn redwood prisma migrate dev`
Generate data migration  | `yarn redwood generate dataMigration seed-users`
Run the data migration   | `yarn redwood data-migrate up`
Generate a layout        | `yarn redwood generate layout blog`
Generate a page          | `yarn redwood generate page home /`
Generate a component     | `yarn redwood generate component article`
Generate scaffolding     | `yarn redwood generate scaffold post`
Generate a cell          | `yarn redwood generate cell name`
Generate types           | `yarn redwood generate types`
Generate SDL & service   | `yarn redwood generate sdl Contact`
Setup auth components    | `yarn redwood setup auth dbAuth`
Generate auth components | `yarn redwood generate dbAuth`
Generate a session secret| `yarn redwood generate secret`
Access Deploy Options    | `yarn redwood generate setup deploy --help`
Access Auth Options      | `yarn redwood generate setup auth --help`
Access Style Options     | `yarn redwood generate setup ui --help`  
To upgrade your app      | `yarn redwood upgrade`
Add package the web workspace | `yarn workspace web add marked`
Add package the api workspace | `yarn workspace api add better-fs`


__Basic Prisma command__  
Operation                  | command
---------------------------|-------------------------
Generate and run migration | `npx prisma migrate dev`
Run generated migrations   | `npx prisma migrate deploy`

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
```bash
$ yarn rw prisma studio
```

__Generate Scaffolding__  
To create all the pages, components and services necessary to perform all CRUD actions on our posts table:
```bash
$ yarn rw g scaffold post
```

__Generate a cell__  
```bash
$ yarn rw g cell Articles
```
All of the props you give to the cell will be automatically available as props in the render components.
Only the ones that match the GraphQL variables list will be given to the query.

__Generate types__  
If the dev server was not running at the time a cell was generated, you may need to generate the types separately.
```bash
$ yarn rw g types
```

__Generate a component__  
```bash
$ yarn rw g component Article
```

### Chapter 3: Building Forms

__Generate SDL and service__  
```bash
$ yarn rw g sdl Contact
```
This will create the following files under the api directory:
1. `api/src/graphql/contacts.sdl.ts`
2. `api/src/services/contacts/contacts.ts`

If you just need a simple read-only SDL, you can skip creating the create/update/delete mutations by passing a `--no-crud` flag to the SDL generator like so:
```bash
$ yarn rw g sdl Contact --no-crud
```

__GraphQL Playground__  
There is GraphQL Yoga's GraphiQL, a web-based GUI for GraphQL APIs at `http://localhost:8911/graphql`.    
To learn more about GraphQL Yoga see [GraphQL Yoga Docs](https://the-guild.dev/graphql/yoga-server/docs)  

__Server side validation__  
GraphQL does some server side validation for you. This is done for example with the required field declaration such is `String!` in an SDL file that adds a constraint that those fields cannot be null as soon as it arrives on the api side.  
In some cases you might need to implement some validation inside in service such as in the case for the format of an email field input.  

### Chapter 4: Authentication
__Auth Setup__  
To generate all the component needed to implement authentication
```bash
$ cd api
$ yarn add -D @redwoodjs/auth-dbauth-setup@7.4.3
$ yarn rw setup auth dbAuth
```
When prompted to _"Enable WebAuthn support"_, pick no — this is a separate piece of functionality we won't need for now.  
The `setup auth dbAuth` command generates the following changes:  
Web workspace:  
1. Adds `@redwoodjs/auth-dbauth-web`  package
2. Generate `web/src/auth.ts`
3. Updates `web/src/App.tsx`
4. Updates `web/src/Routes.ts`

Api workspace:  
1. Adds `@redwoodjs/auth-dbauth-api`  package
2. Generates `api/src/functions/auth.ts` file
3. Generates `api/src/lib/auth.ts` file
4. Updates `api/src/functions/graphql.ts` file.

Root Workspace:
1. Adds `SESSION_SECRET` environment variable to `.env` file.
If you want to generate a new secret
```bash
$ yarn rw generate secret
```
It will output the new secret on the terminal after which you can copy it to you `.env` file.  

If you need simple Login, Signup and Forgot Password pages
```bash  
$ yarn rw generate dbAuth
```

__Auth Model__  
You may need to add a couple of fields to your User model when you create it.  

__Auth Generate__  
To generate the React authentication component
```bash
$  yarn rw g dbAuth
```  
When prompted with _"Enable WebAuthn support ..."_ you should select false.  

This `generate dbAuth` command will generate the following React components:
1. `web/src/pages/ForgotPasswordPage/ForgotPasswordPage.tsx`
2. `web/src/pages/LoginPage/LoginPage.tsx`
3. `web/src/pages/ResetPasswordPage/ResetPasswordPage.tsx`
4. `web/src/pages/SignupPage/SignupPage.tsx`
It will also update the `Routes.tsx` file and add the newly generated pages to it.

#### Deployment
__Database__
There are several hosting providers where you can quickly start up a Postgres instance:
1. [Railway](https://railway.app/)
2. [Heroku](https://www.heroku.com/postgres)
3. [Digital Ocean](https://www.digitalocean.com/products/managed-databases)
4. [AWS](https://aws.amazon.com/rds/postgresql/)  

We choose [Railway](https://railway.app/) because it is free and the easiest use.  

You can delete your existing migration files in from `api/db/migrations` and then recreate a new migration
```bash
$ yarn rw prisma migrate dev
```
When prompted for the migration name you can call it _"initial schema"_.  
This will create a single migration file for the current state of our schema as definition in the `schema.prisma` file.

__Compute__  
We will be deploying the app to [Netlify](https://app.netlify.com/).  
First, we setup netlify deploy
```bash
$ yarn rw setup deploy netlify
```  
This will create a `netlify.toml` file in the root on the project.
It will also update the `redwood.toml` file by changing the `apiUrl` value from `/.redwood/functions` to `/.netlify/functions`

__Deploy__
First add the `@redwoodjs/cli-data-migrate` package
```bash
$ cd api
$ yarn add --dev @redwoodjs/cli-data-migrate
````
To deploy the application, go to you Netlify dashboard and do the  deployment there.

To deploy the to Netlify From your local
```bash
$ yarn rw deploy netlify
```

### Chapter 5: Introduction to Storybook
