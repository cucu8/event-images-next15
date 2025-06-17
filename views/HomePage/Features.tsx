import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Konum paylaş',
    description:
      'Konum paylaşarak davet yerini sevdiklerinize kolayca ulaştırabilir, bu özel güne birlikte adım atmalarını sağlayabilirsiniz. Yol tarifine gerek yok, tek bir dokunuşla herkes doğru yerde, doğru zamanda!',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Davetiye Paylaşımı',
    description:
      'Bu özel günün coşkusunu sevdiklerinizle paylaşmak için davetiyenizi şimdi gönderin. Çünkü en güzel anlar, birlikte kutlanır',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin: 2rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
