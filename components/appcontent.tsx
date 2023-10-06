import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'

const AppContent = ({ Component, pageProps }) => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Component {...pageProps}/>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
