
const UserGroups = [{
  name: 'authors',
  members: ['Peter',],
  permissionGroups: ['basic', 'admin']
}];

const PermissionGroups = [{
  name: 'basic',
  permissions: [
    'Manuscript_READ',
    'Manuscript_UPDATE',
    'Manuscript_CREATE',
  ]
}];

class Permission {
  static isAllowed(userId, permission) {
    // find all PermisionGroups which have this permission
    const foundPG = PermissionGroups.filter( group => 
      group.permissions.indexOf(permission) >= 0
    ).map( group => group.name );

    // find all the UserGroups the user is a member of
    const foundUG = UserGroups.filter(
      group => group.members.indexOf(userId) >= 0 
    ).reduce( (acc, group) => acc.concat(group.permissionGroups), []);

    // find the intersection of the two arrays
    const pgWithPermission = new Set(foundPG);
    const ugWithPermission = new Set(foundUG);
    const intersection = new Set(
      [...pgWithPermission].filter(x => ugWithPermission.has(x)));

    const allowed = (intersection.size);
    if (!allowed) {
      console.log(`Not allowed: ${userId} => ${permission}`);
    }
    return allowed;
  }
}

module.exports = {
  Permission,
}
