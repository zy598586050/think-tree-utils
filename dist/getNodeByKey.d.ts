interface Node {
    [key: string]: any;
    children?: Node[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const getNodeByKey: (key: string, tree: Node[], { keyName, childrenName }?: Partial<TreeOptions>) => Node | null;
export default getNodeByKey;
