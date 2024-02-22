interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const insertNode: (key: string, tree: TreeNode[], obj: TreeNode, type?: 'before' | 'after' | 'children', { keyName, childrenName }?: Partial<TreeOptions>) => void;
export default insertNode;
