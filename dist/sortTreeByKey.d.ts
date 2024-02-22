interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const sortTreeByKey: (tree: TreeNode[], sort?: 'asc' | 'desc', { keyName, childrenName }?: Partial<TreeOptions>) => void;
export default sortTreeByKey;
