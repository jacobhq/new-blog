import 'nextra-theme-blog/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    <script src="https://utteranc.es/client.js"
        repo="jacobhq/new-blog"
        issue-term="pathname"
        label="comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
  )
}
