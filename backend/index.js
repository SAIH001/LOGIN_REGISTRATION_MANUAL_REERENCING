const express = require("express");

const app = express();

const ConnectDB = require("./Config/DB")

require("dotenv").config();


//MIDDLEWARE

app.use(express.json());




// import controllers 
const { createRole, getAllRoles, getRoleById, updateRole, deleteRole } = require("./Controllers/RolesController");

const userController = require('./Controllers/UserAccountsController'); // Adjust path as needed



// POST USERS
app.route('/users').post(userController.createUser);

// GET USER
app.route('/users').get(userController.getAllUsers);

// GET SINGLE USER
app.route('/users/:id').get(userController.getUserById);

// SINGLE USER UPDATE
app.route('/users/:id').put(userController.updateUser);

// DELETE SINGLE USER
app.route('/users/:id').delete(userController.deleteUser);






// Create role
app.route("/roles").post(createRole);

// Get all roles
app.route("/roles").get(getAllRoles);

// Get single role by ID
app.route("/roles/:id").get(getRoleById);

// Update role by ID
app.route("/roles/:id").put(updateRole);

// Delete role by ID
app.route("/roles/:id").delete(deleteRole);







app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT} `)
})

