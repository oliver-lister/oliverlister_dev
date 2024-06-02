type ProjectTagProps = { tag: string };

const ProjectTag: React.FC<ProjectTagProps> = ({ tag }) => {
  return (
    <li className="px-2 py-1 rounded-full text-[10px] bg-primary">{tag}</li>
  );
};

export default ProjectTag;
