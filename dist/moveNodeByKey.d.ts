interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const moveNodeByKey: (key: string, tree: TreeNode[], type?: 'up' | 'down', num?: number, { keyName, childrenName }?: Partial<TreeOptions>) => void;
export default moveNodeByKey;
