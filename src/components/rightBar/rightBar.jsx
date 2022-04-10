import ukraineImage from 'components/images/ukraine-bundle.jpg';
import { Image, ItemWrapper } from './rightBar.styled';

export default function BottomBar() {
  return (
    <>
      <ItemWrapper>
        <Image src={ukraineImage} />
        <p>
          We stand in solidarity with the Uhrainian people agains the russian
          invasion.{' '}
          <a href="https://war.ukraine.ua/support-ukraine/">
            Find out how you can help.
          </a>
        </p>
      </ItemWrapper>
    </>
  );
}
