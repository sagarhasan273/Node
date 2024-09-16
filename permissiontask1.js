const permissions = [
    'permission.department.view',
    'permission.department.edit',
    'permission.department.create',
    'permission.department.delete',
    'permission.designation.view',
    'permission.designation.edit',
    'permission.designation.create',
    'permission.designation.delete',
    'permission.operationgroup.view',
    'permission.operationgroup.edit',
    'permission.operationgroup.create',
    'permission.operationgroup.delete',
    'permission.operator.view',
    'permission.operator.edit',
    'permission.operator.create',
    'permission.operator.delete'
];

const mutatedPermissions = [];

for (let i = 0; i < permissions.length; i++) {
    const permission = permissions[i].split('.')[1];
    let obj = {
        groupName: permission,
        permissions: []
    };

    let deletedIndex = -1;

    for (let j = 0; j < mutatedPermissions.length; j++) {
        if (mutatedPermissions[j].groupName === permission) {
            obj = mutatedPermissions[j];
            deletedIndex = j;
        }
    }

    if (deletedIndex != -1){
        mutatedPermissions.splice(deletedIndex, 1);
    }


    obj.permissions.push(permissions[i]);
    mutatedPermissions.push(obj)
}

console.log(mutatedPermissions)