import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>日報管理アプリDRM(ドラム)</title>
            </Head>

            <div className="">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                マイページ
                            </a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">
                                    Login
                                </a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                <div className="">
                    <div>
                        <h1>日報であなたの時給を可視化できるサービス</h1>
                        <p>
                            DRM(ドラム)では日報を入力するだけで、あなたの単価を正確に把握することが可能です。
                        </p>
                    </div>
                    <div>
                        {/* <Image
                            loader=""
                            src="me.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
