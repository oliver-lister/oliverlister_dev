module.exports = () => async (tree, file) => {
  const getPath = (file) => {
    let filepath = file.history[0];
    return filepath.substring(`${process.cwd()}/pages`.length);
  };
  tree.children.unshift(
    {
      type: "import",
      value: `import {Layout} from '../components/layout';`,
    },
    {
      type: "import",
      value: `import {getArticleProps} from '../lib/ssg';`,
    },
    {
      type: "export",
      value: `const filepath = '${getPath(
        file
      )}'; export const getStaticProps = async () => getArticleProps(filepath);`,
    }
  );
  tree.children.push({
    type: "export",
    default: true,
    value: `export default (props) => <Layout {...props} />;`,
  });
};
