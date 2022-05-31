import Profile from './Profile';
import Section from './Section';
import Container from './Container';
import user from '../components/Profile/user.json';
import Statistics from './Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Container>
        <Section>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>
        <Section>
          <Statistics title="Upload stats" stats={data} />
        </Section>
        <Section>{<FriendList friends={friends} />}</Section>
        <Section>
          <TransactionHistory items={transactions} />
        </Section>
      </Container>
    </>
  );
}
