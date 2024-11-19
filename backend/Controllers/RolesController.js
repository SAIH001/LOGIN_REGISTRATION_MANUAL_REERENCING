

const Roles = require("../Models/Roles_Model")

// Create a new role
const createRole = async (req, res) => {
    try {
      const { RoleName, Status } = req.body;
  
      // Check if role already exists
      const existingRole = await Roles.findOne({ RoleName });
      if (existingRole) {
        return res.status(400).json({ success: false, message: "Role already exists" });
      }
  
      // Create new role
      const role = new Roles({
        RoleName,
        Status,
      });
  
      await role.save();
      return res.status(201).json({ success: true, data: role });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error creating role', error: error.message });
    }
  };

  

  // Get all roles
const getAllRoles = async (req, res) => {
    try {
      const roles = await Roles.find();
      return res.status(200).json({ success: true, data: roles });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error fetching roles', error: error.message });
    }
  };

  

  // Get single role by ID
const getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Roles.findById(id);
  
      if (!role) {
        return res.status(404).json({ success: false, message: 'Role not found' });
      }
  
      return res.status(200).json({ success: true, data: role });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error fetching role', error: error.message });
    }
  };

  
  // Update role by ID
const updateRole = async (req, res) => {
    try {
      const { id } = req.params;
      const { RoleName, Status } = req.body;
  
      const role = await Roles.findById(id);
      if (!role) {
        return res.status(404).json({ success: false, message: 'Role not found' });
      }
  
      // Update role details
      role.RoleName = RoleName || role.RoleName;
      role.Status = Status || role.Status;
  
      await role.save();
  
      return res.status(200).json({ success: true, data: role });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error updating role', error: error.message });
    }
  };

  
  // Delete role by ID
const deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
  
      const role = await Roles.findById(id);
      if (!role) {
        return res.status(404).json({ success: false, message: 'Role not found' });
      }
  
      await role.remove();
  
      return res.status(200).json({ success: true, message: 'Role deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error deleting role', error: error.message });
    }
  };
  


  module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
  };
  