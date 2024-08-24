npm i -g @nestjs/cli@latest  --> to download nest js globally
nest new project-name  --> to create new nestjs project



MODULES
app module act as the root of our application 
its as the container of all other app modules as the starting point (dependency tree)
Modules are the building blocks of a Nest.js application
They help in organizing the application structure by grouping related controllers and providers together
we can create new modules by write (nest g module module_name) command in the terminal / g : generate
and the new module must be added to imports array in the app.module.ts file
each module has its own controllers , providers
we can add contoller , provider (service) to each module by (nest g controller module_name)  (nest g service module_name)
or we can generate all module and its own resources with one command (nest g resource module_name)



CONTOLLERS
// Controllers are responsible for handling incoming requests and returning responses to the client
// ALL OF ROUTES IN THIS CONTROLLER FILE WILL BE PRE FIXED WITH /ninjas string because its added to @Controller('ninjas')
// AND INSIDE THE class NinjasController{} WE DEFINE METHODS FOR EACH ROUTE
// GET /ninjas --> []
// GET /ninjas/:id --> {...}
// POST /ninjas
// PUT/PATCH /ninjas/:id --> {...}
// DELETE /ninjas/:id



PROVIDERS(SERVICES)
to add the detailed logic , more complix operations , update the database maybe , full imp of the detailed logic for add , remove , get , delete operations
and use this logic in any related fields such as controllers or other providers , controllers could inject many providers inside it

providers are classes annotated with the @Injectable() decorator. A provider is any class that can be injected as a dependency, typically services that handle data access and business logic.




PIPES
Pipes are a powerful feature in Nest.js used for data transformation and data validation.

Pipes have two typical use cases:
transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception