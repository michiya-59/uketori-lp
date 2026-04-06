import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `特定商取引法に基づく表記 | ${SITE_NAME}`,
  description: `${SITE_NAME}の特定商取引法に基づく表記`,
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="mb-12 text-4xl font-bold text-neutral-900">
          特定商取引法に基づく表記
        </h1>
        
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
          <table className="w-full">
            <tbody className="divide-y divide-neutral-200">
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  販売事業者
                </th>
                <td className="py-4 text-neutral-900">
                  ライズ合同会社
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  運営責任者
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
                  適格請求書発行<br />事業者登録番号
                </th>
                <td className="py-4 text-neutral-900">
                  T2010603011275
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  お問い合わせ
                </th>
                <td className="py-4 text-neutral-900">
                  Eメール：info@rise-itkuru.com<br />
                  <span className="text-sm text-neutral-500">
                    ※お電話でのお問い合わせは受け付けておりません。メールにてお問い合わせください。
                  </span>
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  販売価格
                </th>
                <td className="py-4 text-neutral-900">
                  各プランの料金は、本サイトの料金ページに記載のとおりです。<br />
                  <Link href="/#pricing" className="text-primary-600 hover:text-primary-700">
                    料金プランを見る
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  商品代金以外の<br />必要料金
                </th>
                <td className="py-4 text-neutral-900">
                  インターネット接続料金、通信料金等はお客様のご負担となります。
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  お支払方法
                </th>
                <td className="py-4 text-neutral-900">
                  クレジットカード決済（Visa、Mastercard、JCB、American Express、Diners Club）
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  お支払時期
                </th>
                <td className="py-4 text-neutral-900">
                  月額プラン：毎月の契約更新日<br />
                  年額プラン：毎年の契約更新日<br />
                  ※無料トライアル期間終了後、自動的に課金が開始されます。
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  サービス提供時期
                </th>
                <td className="py-4 text-neutral-900">
                  お申し込み完了後、即時ご利用いただけます。
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  返品・キャンセル<br />について
                </th>
                <td className="py-4 text-neutral-900">
                  本サービスはデジタルコンテンツの性質上、お客様のご都合による返金・返品・キャンセルはお受けできません。<br />
                  ただし、当社の責めに帰すべき事由によりサービスが提供できない場合は、この限りではありません。<br />
                  <br />
                  解約はいつでも可能です。解約手続きは管理画面から行っていただけます。解約後、次回更新日以降は課金されません。
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  動作環境
                </th>
                <td className="py-4 text-neutral-900">
                  <strong>推奨ブラウザ：</strong><br />
                  Google Chrome（最新版）<br />
                  Safari（最新版）<br />
                  Microsoft Edge（最新版）<br />
                  Firefox（最新版）<br />
                  <br />
                  <span className="text-sm text-neutral-500">
                    ※上記以外のブラウザでは、一部機能が正常に動作しない場合があります。
                  </span>
                </td>
              </tr>
              <tr>
                <th className="py-4 pr-8 text-left align-top text-sm font-medium text-neutral-500">
                  その他
                </th>
                <td className="py-4 text-neutral-900">
                  本サービスのご利用にあたっては、利用規約およびプライバシーポリシーが適用されます。<br />
                  <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                    利用規約
                  </Link>
                  {" / "}
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                    プライバシーポリシー
                  </Link>
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
