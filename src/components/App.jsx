import Profile from './Profile';
import Section from './Section';
import Container from './Container';
import user from '../components/Profile/user.json';

export default function App() {
  return (
    <>
      <Container>
        <Section bgc="red">
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>
      </Container>
    </>
  );
}
