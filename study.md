MODULES
app module act as the root of our application 
its as the container of all other app modules as the starting point (dependency tree)
we can create new modules by write (nest g module module_name) command in the terminal / g : generate
and the new module must be added to imports array in the app.module.ts file
each module has its own controllers , providers
we can add contoller , provider (service) to each module by (nest g controller module_name)  (nest g service module_name)
or we can generate all module and its own resources with one command (nest g resource module_name)


CONTOLLERS
// ALL OF ROUTES IN THIS CONTROLLER FILE WILL BE PRE FIXED WITH /ninjas string because its added to @Controller('ninjas')
// AND INSIDE THE class NinjasController{} WE DEFINE METHODS FOR EACH ROUTE
// GET /ninjas --> []
// GET /ninjas/:id --> {...}
// POST /ninjas
// PUT/PATCH /ninjas/:id --> {...}
// DELETE /ninjas/:id


SERVICES
to add the detailed logic , more complix operations , update the database maybe , full imp of the detailed logic for add , remove , get , delete operations
and use this logic in any related fields such as controllers , controllers could inject many services inside it