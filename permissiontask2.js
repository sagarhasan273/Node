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
    let flag = false;

    mutatedPermissions.map((item) => {
        if (item.groupName === permission) {
            item.permissions.push(permissions[i]);
            flag = true;
            return item;
        }
        return item;
    }) 

    if (flag){
        continue;
    }

    mutatedPermissions.push({
        groupName: permission,
        permissions: [permissions[i]]
    })
}

console.log(mutatedPermissions)