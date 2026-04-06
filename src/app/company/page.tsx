import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `運営会社 | ${SITE_NAME}`,
  description: `${SITE_NAME}の運営会社情報`,
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="mb-12 text-4xl font-bold text-neutral-900">運営会社</h1>
        
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
          <table className="w-full">
            <tbody className="divide-y divide-neutral-200">
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  会社名
                </th>
                <td className="py-4 text-neutral-900">
                  ライズ合同会社
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  代表者
                </th>
                <td className="py-4 text-neutral-900">
                  代表社員 鈴木晴也
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  所在地
                </th>
                <td className="py-4 text-neutral-900">
                  〒135-0064<br />
                  東京都江東区青海2丁目7-4 510
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  事業内容
                </th>
                <td className="py-4 text-neutral-900">
                  クラウドサービスの企画・開発・運営<br />
                  業務効率化ツールの提供
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  お問い合わせ
                </th>
                <td className="py-4 text-neutral-900">
                  <a href="mailto:info@rise-itkuru.com" className="text-primary-600 hover:text-primary-700">
                    info@rise-itkuru.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
