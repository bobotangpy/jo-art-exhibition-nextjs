import Head from "next/head";

export default function WebHead() {
  return (
    <Head>
      <title>
        Visualizing the Civic Identity Struggle in Hong Kong: An Art Exhibition
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="This proposed art exhibition, an independent website, seeks to
            address the civil identity complex in Hong Kong. Including artworks
            from local artists/educators and students, collages of local and
            global headlines and artworks, short video clips, audio recordings
            of local musicians improvising to express their emotions towards the
            city’s situation, and interactive storyboards, the exhibition’s goal
            is to spark discussions and reflections on: (1) the concepts of
            home, identity, citizenship, and social responsibility; (2) the
            interplay and struggles among these concepts and with education
            under an unstable socio-political environment; and (3) the role of
            education among these concepts under modern globalization."
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KM1PNW677B"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-KM1PNW677B');
            `,
        }}
      />
    </Head>
  );
}
