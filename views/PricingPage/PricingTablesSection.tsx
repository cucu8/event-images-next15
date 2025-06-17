import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard
          title="Tek paket"
          description=""
          benefits={[
            '7 gün saklama, ',
            '7 gün boyunca fotoğraf yükleme',
            'Davet yorumları',
            'Davetiye kullanımı',
            'Davet Konum Bilgisi',
            'Tüm resimler Digital olarak sizlere verilecektir.',
          ]}
          isOutlined
        >
          2000 ₺
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
