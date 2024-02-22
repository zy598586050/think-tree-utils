interface Node {
    [key: string]: any;
    children?: Node[];
}
declare const getFieldPathByKey: (key: string, tree: Node[], { keyName, childrenName }: {
    keyName?: string | undefined;
    childrenName?: string | undefined;
}) => string[] | number[];
export default getFieldPathByKey;
