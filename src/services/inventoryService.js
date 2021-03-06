const KEYS = {
    suppliers:'suppliers',
    supplierId: 'supplierId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Food' },
    { id: '2', title: 'Drinks' },
    { id: '3', title: 'Furniture' },
    { id: '4', title: 'Other' },
])

export function insertSupplier(data) { 
    let suppliers = getAllSuppliers();
    data['id'] = generateSupplierId();
    suppliers.push(data)
    localStorage.setItem(KEYS.suppliers,JSON.stringify(suppliers))
}

export function updateSupplier(data) {
    let suppliers = getAllSuppliers();
    let recordIndex = suppliers.findIndex(x => x.id == data.id);
    suppliers[recordIndex] = { ...data }
    localStorage.setItem(KEYS.suppliers, JSON.stringify(suppliers));
}

export function deleteSupplier(id) {
    let suppliers = getAllSuppliers();
    suppliers = suppliers.filter(x => x.id != id)
    localStorage.setItem(KEYS.suppliers, JSON.stringify(suppliers));
}

export function generateSupplierId() {
    if (localStorage.getItem(KEYS.supplierId) == null)
        localStorage.setItem(KEYS.supplierId, '0')
    var id = parseInt(localStorage.getItem(KEYS.supplierId))
    localStorage.setItem(KEYS.supplierId, (++id).toString())
    return id;
}

export function getAllSuppliers() { 
    if (localStorage.getItem(KEYS.suppliers) == null)
        localStorage.setItem(KEYS.suppliers, JSON.stringify([]))
    let suppliers = JSON.parse(localStorage.getItem(KEYS.suppliers));
    //map departmentID me department title
    let departments = getDepartmentCollection();
    return suppliers.map(x =>({
        ...x,
        department : departments[x.departmentId-1].title
    }))
}