import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { Header } from "../components/layout/Header";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { Text } from "../components/ui/Text";
import { Seo } from "../components/layout/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const License: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.license.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={true}>
              <Heading as="h1" style={{ marginBottom: 0 }}>{page.license.title}</Heading>
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
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default License;
