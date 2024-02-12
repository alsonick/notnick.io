import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const License: NextPage = () => {
  return (
    <>
      <Seo
        title={`License - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading style={{ marginBottom: 0 }}>License</Heading>
          </Header>
          <div className="mb-4">
            <Text>
              MIT License <br />
              <br /> Copyright (c) {new Date().getFullYear()} {FULL_NAME}
              <br />
              <br /> Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
              <br />
              <br /> The above copyright notice and this permission notice shall
              be included in all copies or substantial portions of the Software.
              <br />
              <br /> THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT
              WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
              OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
              OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </Text>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default License;
