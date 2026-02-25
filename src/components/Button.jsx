import { Link } from 'react-router-dom'

const ARROW_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 25 25" fill="none" className="button-icon">
        <path d="M12.7793 18.4021C12.7793 18.4021 18.9133 13.8844 18.9133 12.268C18.9133 10.6516 12.7793 6.13403 12.7793 6.13403" stroke="currentColor" strokeWidth="1.67292" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.62285 18.4021C5.62285 18.4021 11.7568 13.8844 11.7568 12.268C11.7568 10.6516 5.6228 6.13403 5.6228 6.13403" stroke="currentColor" strokeWidth="1.67292" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

/**
 * Reusable animated button matching Webflow .button component.
 * Uses either <Link> for internal routes or <a> for external/anchors.
 */
export default function Button({ href, to, variant = '', children, className = '', onClick }) {
    const inner = (
        <div className="button-wrap">
            <div className="button-text-wrap">
                <div className="button-text">{children}</div>
                <div className="button-text">{children}</div>
            </div>
            <div className="button-icon-wrap">
                {ARROW_ICON}
                {ARROW_ICON}
            </div>
        </div>
    )

    const variantAttr = variant ? { [`data-wf--button--variant`]: variant } : {}
    const cls = `button w-inline-block ${className}`.trim()

    if (to) {
        return (
            <Link to={to} className={cls} {...variantAttr} onClick={onClick}>
                {inner}
            </Link>
        )
    }

    return (
        <a href={href || '#'} className={cls} {...variantAttr} onClick={onClick}>
            {inner}
        </a>
    )
}
