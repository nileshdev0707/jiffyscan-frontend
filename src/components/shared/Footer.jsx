const navigation = {
    solutions: [
        { name: 'About Us', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Brand Assets', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    support: [
        { name: 'API Plans', href: '#' },
        { name: 'Explorer-as-a-service', href: '#' },
        { name: 'GasFee Infrastructure', href: '#' },
    ],
    company: [
        { name: 'Blog', href: '#' },
        { name: 'API Documentation', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Submit an issue', href: '#' },
    ],
    social: [
        {
            name: 'Twitter',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

export default function Example() {
    return (
        <footer className="bg-jiffy-dark-grey" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex space-x-6">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img
                            className="h-7"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Company name"
                        />
                        <p className="text-sm leading-6 text-white">
                            We provide a user-friendly block explorer, with an
                            easy-to-use interface for users to view, confirm,
                            and inspect transactions on EVM (Ethereum Virtual
                            Machine) blockchains, specialised for EIP-4337
                            confirming transactions.{' '}
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm leading-6  text-jiffy-grey-subtitle">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4 ">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm leading-6 text-jiffy-grey-subtitle">
                                    Products & Services
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm leading-6 text-jiffy-grey-subtitle">
                                    Community
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-white"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-[#90A4AE] pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">
                        Donations: 0x0000000
                    </p>
                    <p className="text-xs leading-5 text-gray-500">
                        jiffyscan.xyz &copy; 2023
                    </p>
                </div>
            </div>
        </footer>
    );
}