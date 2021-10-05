import { useTranslation } from 'react-i18next';
import PostCard from '../../../snippets/postcontentcard';

function PostContent() {
  const { t } = useTranslation('common');
  const postContentAry1 = [
    {
      bg: 'bg',
      url: '/static/svg/fast.svg',
    },
    {
      bg: 'bg',
      url: '/static/svg/loop.svg',
    },
    {
      bg: 'bg',
      url: '/static/svg/shield.svg',
    },
  ];
  const postContentAry2 = [
    {
      bg: 'bg',
      url: '/static/svg/ux-design.svg',
    },
    {
      bg: 'bg',
      url: '/static/svg/instructions.svg',
    },
    {
      bg: 'bg',
      url: '/static/svg/computing.svg',
    },
  ];

  return (
    <>
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="text-center h2 ">{t('feature.title')}</h2>
            <p className="text-dark  text-center">{t('feature.description')}</p>
          </div>
          <div className="row justify-content-around mb-5 px-2">
            {postContentAry1.map((postContentData, index) => {
              return (
                <div className="col-md-3 mb-3 px-2" key={`${index}`}>
                  <PostCard
                    url={postContentData.url}
                    para={t(`feature.features1.${index}.description`)}
                    alt={t(`feature.features1.${index}.title`)}
                    heading={t(`feature.features1.${index}.title`)}
                  />
                </div>
              );
            })}
          </div>
          <div className="row justify-content-around mb-5 px-2">
            {postContentAry2.map((postContentData, index) => {
              return (
                <div className="col-md-3 mb-3 px-2" key={`${index}`}>
                  <PostCard
                    url={postContentData.url}
                    para={t(`feature.features2.${index}.description`)}
                    alt={t(`feature.features2.${index}.title`)}
                    heading={t(`feature.features2.${index}.title`)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
