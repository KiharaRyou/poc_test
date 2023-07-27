import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;

const layoutStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={layoutStyle}>Test Project</Header>
      <Content >
        <Component {...pageProps} />
      </Content>
      <Footer style={layoutStyle}></Footer>
    </Layout>
  </Space>
}
