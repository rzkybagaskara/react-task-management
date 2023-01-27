import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h4>This is a task management app created with React and JSON Server as a mock REST API</h4>
      <p>Following the tutorial from React Crash Course by Traversy Media</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
