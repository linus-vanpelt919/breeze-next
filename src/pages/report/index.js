import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
export default function Home() {
    //[daily].js?
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <>
            <Head>
                <title>日報管理アプリDRM(ドラム)-日報入力</title>
            </Head>
            <div className="mt-32 mx-auto">
                <div className="bg-slate-200 max-w-4xl mx-auto p-10">
                    <section className="flex justify-between mb-5 pb-2 border-solid border-b border-gray-400">
                        <h2>2022年10月10日(月)</h2>
                        <div className="flex gap-4">
                            <p>
                                <Link href="">
                                    <a href="">前の日</a>
                                </Link>
                            </p>
                            <p className="">今日</p>
                            <p>
                                <Link href="">
                                    <a href="">次の日</a>
                                </Link>
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3 className="mb-5">本日の作業</h3>
                        <form className="">
                            <div className="flex py-4 px-2.5 bg-white rounded-sm">
                                <div className="w-10/12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <label
                                            for="company"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            顧客
                                        </label>
                                        <select
                                            id="company"
                                            className="w-10/12 bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>顧客を選択</option>
                                            <option value="US">
                                                〇〇株式会社
                                            </option>
                                            <option value="CA">
                                                〇〇株式会社
                                            </option>
                                            <option value="FR">
                                                〇〇株式会社
                                            </option>
                                            <option value="DE">
                                                〇〇株式会社
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <label
                                            for="company"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            案件
                                        </label>
                                        <select
                                            id="company"
                                            className="w-10/12 bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>案件を選択</option>
                                            <option value="US">
                                                〇〇 ベースコーディング
                                            </option>
                                            <option value="CA">
                                                〇〇 機能実装
                                            </option>
                                            <option value="FR">
                                                〇〇 ディレクション作業
                                            </option>
                                            <option value="DE">
                                                〇〇 デザイン作成
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <label
                                            for="company"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            作業
                                        </label>
                                        <select
                                            id="company"
                                            className="w-10/12 bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>作業区分</option>
                                            <option value="US">
                                                コーディング
                                            </option>
                                            <option value="CA">デザイン</option>
                                            <option value="FR">
                                                ディレクション
                                            </option>
                                            <option value="DE">
                                                ミーティング
                                            </option>
                                            <option value="DE">実装調査</option>
                                            <option value="DE">修正対応</option>
                                            <option value="DE">保守業務</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <label
                                            for="company"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            時間
                                        </label>
                                        <select
                                            id="company"
                                            className="w-10/12 bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>作業時間</option>
                                            <option value="US">0.5h</option>
                                            <option value="CA">1h</option>
                                            <option value="FR">1.5h</option>
                                            <option value="DE">02:00</option>
                                            <option value="DE">02:30</option>
                                            <option value="DE">03:00</option>
                                            <option value="DE">03:30</option>
                                            <option value="DE">04:00</option>
                                            <option value="DE">04:30</option>
                                            <option value="DE">05:00</option>
                                            <option value="DE">05:30</option>
                                            <option value="DE">06:00</option>
                                            <option value="DE">06:30</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <textarea
                                        className="dark:border-gray-300 focus:outline-none focus:border-gray-300 focus:ring-0"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"></textarea>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}
