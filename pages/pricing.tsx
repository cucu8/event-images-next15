import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page
      title="Paketler ve Ücretlendirme"
      description="Her ihtiyaca uygun esnek fiyat seçenekleriyle etkinliklerinizi daha verimli yönetin."
    >
      <Wrapper>
        <PricingTablesSection />
        {/* <FaqSection /> */}
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
