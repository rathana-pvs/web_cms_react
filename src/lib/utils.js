export const isNotEmpty = (value)=>{
    if(value){
        if (Array.isArray(value)) {
            return value.length > 0;  // Check for non-empty array
        } else if (typeof value === 'object') {
            return Object.keys(value).length > 0;  // Check for non-empty object
        }
    }
    return false; // Return false for non-array, non-object values
}

export const buildTree = (...dataSets) => {
    const map = new Map();

    dataSets.flat().forEach(item => {
        map.set(item.key, {
            ...item,
            children: item.sub ? item.sub : [],
        });
    });

    const tree = [];

    map.forEach((item) => {
        const node = {
            ...item,
            iconClass: item.icon ? `fa-regular ${item.icon}` : null,   // <-- only string
        };

        if (node.parentId) {
            const parent = map.get(node.parentId);
            if (parent) parent.children.push(node);
        } else {
            tree.push(node);
        }
    });

    return tree;
};