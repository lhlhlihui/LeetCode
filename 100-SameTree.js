var isSameTree = function(p, q) {
    if (p === null || q === null) return p === q;
    if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return false;
};
