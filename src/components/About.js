import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div style={aboutStyle}>
      <h4>This is a task management app created with React and JSON Server as a mock REST API</h4>
      <p>Following the tutorial from React Crash Course by Traversy Media on Youtube</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

const aboutStyle = {
  textAlign: 'center',
  lineHeight: 2,
};

export default About;
