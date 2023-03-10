import React, { PropsWithChildren, ReactNode, useState } from 'react';

export const Modal = ({
    isOpen,
    onClose,
    title,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    title: ReactNode;
    children: ReactNode;
}) => {
    return (
        <>
            <div
                className={`if backdrop ${isOpen ? 'is-open' : ''}`}
                onClick={onClose}
            />
            <div className={'if modal'} role={'dialog'} aria-modal={'true'}>
                <div className="if title">
                    <span className="if" id="modal-title">
                        {title}
                    </span>
                    <button
                        type="button"
                        className="if close"
                        aria-label="Close modal"
                        onClick={onClose}
                    />
                </div>
                <div className="if content">{children}</div>
            </div>
        </>
    );
};
