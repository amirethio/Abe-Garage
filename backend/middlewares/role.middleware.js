
const authorizeRoles = (...allowedRoles)=>{
    
return (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
          success: "false",
          error: "Not authentiacted",
        });
    }
    if (!allowedRoles.includes(req.user.employee_role)) {
     return res.status(401).json({
        success: "false",
        error: "You don't have a valid role to access this page",
      });
    }
    next();
};

}
 











module.exports = authorizeRoles;
